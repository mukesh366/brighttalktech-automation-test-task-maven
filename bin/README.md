#Automation Test Task
Please develop the automation task using this simple framework.

### Test automation framework
- This is a Maven based framework
- pom.xml should have everything you need to create and run the test. Please add further dependencies if you require.

The following folder `src/test/java/AutomationTest/BrightTalkTest` contains the following class:

`Hook` - this is the before and after. This launches and kills the browser.
`RunnerTest` - contains the CucumberOptions which runs the BDD's

The following folder `src/main/java/AutomationTest/BrightTalkTest` contains the following class:
`BrowserSetup` - This contains the condition use a given browser based on what is set to Browser= within `TestData.properties`

### Test task
> Link for API documentation: https://reqres.in/

Create steps definition according to provided bdd within API-Test.feature.  
Fill in the gaps marked as <enter value> with test data, which you think would fit the scenario.

**NOTE: We have introduced some basic error for you to debug, please debug and run `SampleTest.feature`.
Then write your test.**

### Tips
Use parametrised steps if you think it is necessary.  
Mind the code style.  
Write reusable code.  
Feel free to expand the framework and please contact HR if you need any advise.



### Step To Run 

1)To Run sampleTest.feature
Set the path of feature in Cucumber Option As a 
        features = "./src/test/java/",
Set the path of glue in Cucumber Option As a    
         glue = {"AutomationTest/BrightTalkTest/"},  
         
and set the Tag in cucumber option as a
         tags = {"@sample"},
 
scenario of SampleTest.feature in src/test/java     
 tag it with @sample    
Also tag the Hooks method as a @sample in the src/test/java/AutomationTest/BrightTalkTest/Hook.java


2)To Run API-Test.feature
Set the path of feature in Cucumber Option As a 
        features = "./src/test/java/",
Set the path of glue in Cucumber Option As a    
         glue = {"AutomationTest/BrightTalkTest/"},  
         
and set the Tag in cucumber option as a
         tags = {"@API"},
         
 
All the scenario of SampleTest.feature in src/test/java     
 tag it with @API 