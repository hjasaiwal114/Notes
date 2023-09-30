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