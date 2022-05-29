let { fakeUser } = require("../FakeUser");
const resolvers = {
    Query: {
        users: () => {
            return fakeUser;
        }
    },
    Mutation: {
        goForward: (parent, args) => {
            const request = args.input;
            console.log(request)
            fakeUser = { ...request }
            let pageNumber = "";
            Object.entries(request).forEach((ele) => {
                console.log(ele);
                if (ele[0] === "firstName") {
                    pageNumber = "1"
                } else if (ele[0] === "lastName") {
                    pageNumber = "2"
                } else if (ele[0] === "mobileNumber") {
                    pageNumber = "2-1"
                } else if (ele[0] === "email") {
                    pageNumber = "2-2"
                }
            });
            console.log(fakeUser);
            return { pageNumber };
        }
    }
};

module.exports = { resolvers };