## usersnack

I could've made my life much easier with using class based components, but this is the first project where I tried to use functional components with hooks, also this is the first project where I wrote some kind of tests for it.

### Demo
[Here](https://bb-usersnack.herokuapp.com/) is a demo deployed on heroku.
Watch out, the first load might take long as there is a coldstart period on herokus side.

### Todos

* make things responsive
* Improve image size of header image
* create a grid in the PizzaOverview to improve responsiveness

* add skeletons when fetching data from api
* make use of api and add error handling to services

* improve the extras display, the wireframe for this is flawed as the user doesn't see all possible options without clicking the selection. This would greatly improve the impulsively bought extras
* fix jumping around when selecting extras, this is obsolte if the extras display is changed

* add validation to textfields when ordering
* use material-ui makeStyles for stying instead of just classname and css

* write more detailed tests
* test it on more browsers than chrome