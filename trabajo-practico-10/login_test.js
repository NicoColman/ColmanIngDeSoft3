Feature('sample');

Scenario('Unificado', ({ I }) => {
    I.amOnPage('http://localhost:4200');
	I.click('Register');
	I.amOnPage('/account/register')
    I.see('Login');
	I.fillField('[formcontrolname="firstName"]','emilia');
	I.fillField('[formcontrolname="lastName"]','Schwindt');
	I.fillField('[formcontrolname="username"]','emilia');
	I.fillField('[formcontrolname="password"]','1234567890');
	I.click('Register');
  	





    I.amOnPage('http://localhost:4200');
    I.see('Login');
	I.fillField('[formcontrolname="username"]','juan');
	I.fillField('[formcontrolname="password"]','123456');
	I.click('Login');
	I.see('Username or password is incorrect');
  	


	
	I.amOnPage('http://localhost:4200');
	I.see('Login');
	I.fillField('[formcontrolname="username"]','emilia');
	I.fillField('[formcontrolname="password"]','1234567890');
	I.click('Login');
	I.see('Hi emilia','H1');

});