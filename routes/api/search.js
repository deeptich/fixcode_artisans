const express = require('express');
const router = express.Router();
const Profile = require('../../models/Profile');
const User = require('../../models/User');
 

//@route    GET api/search/serach
//@desc     search the product range
//@access   Public

router.get('/search',async (req, res) => {
    const searchQuery = req.query;
    console.log('backend serach api called and Search string is', searchQuery);
});
    

module.exports = router;