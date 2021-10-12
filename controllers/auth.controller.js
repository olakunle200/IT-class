const bcrypt = require("bcryptjs");
const User = require("../models/User");
exports.getloginpage =
    (req, res, next) => {
        let message = req.flash("error");
        if (message.length > 0) {
            message = message[0];
        } else {
            message = null;
        }
        res.render("auth/login", {
            errorMessage: message,
        });
    },


    exports.postloginpage = async (req, res, next) => {
        const email = req.body.email;
        const password = req.body.password;

        const user = await User.findOne({ email: email });

        if (!user) {
            req.flash('error', 'Invalid email or password');
            console.log("user not found");
            return res.redirect("/login/page");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            await req.session.save();
            return res.redirect("/adminDB")
        }
    }


//SIGN UP PAGE

exports.getsignUpPage =
    (req, res, next) => {
        res.render("auth/signup")
    }

exports.postsignUpPage = async (req, res, next) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;

    const emailExists = await User.findOne({ email: email });

    if (emailExists) {
        return res.redirect("auth/signup")
    }

    const hashPassword = await bcrypt.hash(password, 12);
    const user = new User({
        fname: fname,
        lname: lname,
        email: email,
        password: hashPassword,
        role: role
    });

    await user.save();

    res.redirect("/login/page");
}

