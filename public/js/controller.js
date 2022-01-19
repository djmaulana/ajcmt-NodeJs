const homePage = (req, res) => {
    res.render('partials/main', {
        layout: 'partials/main',
        title: 'Aljohari Konveksi'
    })
}

const login = (req, res) => {
    res.render('login', {
        layout: 'login',
    });
};

const newUser = (req, res) => {
    res.render('accountCreated', {
        layout: 'accountCreated',
        title: 'Aljohari Konveksi',
    });
};

const empty = (req, res) => {
    res.render('empty', {
        layout: 'empty'
    });
};

module.exports = { homePage, login, newUser, empty };