import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User.js";

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                const email = profile.emails[0].value;
                const fullName = profile.displayName;

                let user = await User.findOne({ email });

                if (!user) {
                    // New Google user
                    user = await User.create({
                        fullName,
                        email,
                        googleId: profile.id,
                        role: "user",
                    });
                } else if (!user.googleId) {
                    // Existing user (email signup), link Google account
                    user.googleId = profile.id;
                    await user.save();
                }

                return done(null, user);
            } catch (err) {
                return done(err, null);
            }
        }
    )
);

// Required by passport (even without sessions)
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) =>
    User.findById(id).then((user) => done(null, user))
);

export default passport;
