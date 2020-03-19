const express = require('express');
const router = express.Router();
const Profile = require('../../models/Profile');
const User = require('../../models/User');


//@route    GET api/search/serach
//@desc     search the product range
//@access   Public

router.post('/search',async (req, res) => {
    const searchQuery = req.body.searchTerm;
    console.log('backend serach api called and Search string is', searchQuery);

    res.send({ searchQuery })
});


module.exports = router;