const routes = require("express").Router()
const QuestionController = require("../controllers/QuestionController")
const { authorization } = require("../middlewares/authorization")
const { authentication } = require("../middlewares/authentication")

routes.get("/", QuestionController.findAllQuestion)
routes.post("/", authentication, QuestionController.create)
routes.get("/:id", QuestionController.findOne)
routes.patch("/:id", authentication, authorization, QuestionController.updateQuestion)
routes.delete("/:id", authentication, authorization, QuestionController.deleteQuestion)
routes.patch("/", authentication, authorization, QuestionController.vote)

module.exports = routes