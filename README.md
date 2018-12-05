# Board radar

I have given the name 'Board radar' to this API so that we can refer to it easily.

The application is available at this address: https://brapi.13pass.com/

No documentation are available for now but you can find out how to use the API by checking the test/ folder

## Constraints

A few constraints for the creation of this API 

* use nodeJs.
* use mongoDB.
* use a third party to login.
* time constraint of two evenings.


## Technical choices

Given the constraints I've made a few choices:

* passportJs, to be able to login via oauth to a large amount of third party platform
* google plus oauth2 (via passport-google-oauth20) for third party login especially since we can use google-auth-library-nodejs with puppeteer (and the navigator Chromium in headless mode) to integrate the login in automated tests
* JSON web tokens (via jsonwebtoken) so that the clients can interact securely with the API.
* koaJs, I've hesitated for some times between ExpressJs and KoaJs for the web framework as I wanted a lightweight solution in order not to be blocked in any way. I'm familiar with both. On one hand ExpressJs is really popular and you can find tons of ressources on the web for it. On the other hand koaJs provide a really flexible middleware. In the end given that I'm not familiar with passportJs nor the implementation of JSON web tokens (JWT), I thought the flexibility of koaJs could be a real plus.
* mongoose, to manage the db connection and interact with a schema less db through a model layer. 
* jest for testing the application

## The plan

As I'm doing test driven development I like to cut the work to do in small bits and in an order that allow me to write tests before implementing each part.

Here are those steps in a chosen order:

* setup jest and the koa api, create a simple endpoint test
* setup mongoose and create a simple test for the model
* setup puppeteer and create a test to login to google via oauth
* setup passportJs and test the integration with google + API
* setup JWT and update login test
* create controller, model and routes for the object 'user' and test CRUD actions on user
* create controllers, models and routes for objects 'board' and 'request' and test CRUD actions for them
* Add headers for CORS so that web client can use the API.
 

## Results

Unfortunately I have stopped at the 4th step of my plan (have passportJs integrated with the google + API). I have spent more time than I was expecting figuring out the magic behind passportJs.

But now at least I'm much more confortable using passportJs

## Feedback

I think the guidelines were pretty clear in general, the only thing that was not was the timing (one week to deliver the work, but spend only one day or two afternoon on it).
