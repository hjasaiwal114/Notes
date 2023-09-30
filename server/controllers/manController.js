/**
 * GET /
 * Homepage
 */

exports.homepage = async (req, res) => {
    const locals = {
        title: "NodeJs Notes",
        description: "free NodeJS Notes App.",
    }

    res.render('index', locals);
}

/**
 * Get /
 * About
 */

exports.about = async (req, res) => {
    const locals = {
        title: "About - NodeJs Notes",
        description: "Free NodeJs App.",
    }
    res.render('about', locals);
}