import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ZLm_kTp0wGMWMCynvVBBWbhghb6y9NNZQB8Bu5C1urmUJ8JOl4jqZSrOK53UMde4zmVdMk6gG3Q2DINsduy1_J3jooz11l9cJcCy6pI-7d_uixfsfniMxAy0fB7xXnYx'
    }
})
