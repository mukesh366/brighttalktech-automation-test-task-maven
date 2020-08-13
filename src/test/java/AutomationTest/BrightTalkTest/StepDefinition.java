package AutomationTest.BrightTalkTest;

import static AutomationTest.BrightTalkTest.HomePage.homePage;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.awaitility.Awaitility;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import edu.emory.mathcs.backport.java.util.Arrays;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import junit.framework.Assert;
import net.minidev.json.JSONObject;
import utility.DataTableReader;
import utility.RequestHandler;


public class StepDefinition {

	RequestHandler reqhandler=new RequestHandler();

	Response response;


	List<String>UserId=new ArrayList<String>();
	JsonPath json = null;


	@Given("^I am on the home page$")
	public void iAmOnTheHomePage() {
		homePage();
		

	}
	@Given("^I get the default list of users for on (\\d+) page$")
	public void i_get_the_default_list_of_users_for_on_st_page(int page){

		response= reqhandler.getReqestWithURI("/api/users?page="+page);

		response.prettyPrint();
	}

	@When("^I get the list of all users$")
	public void i_get_the_list_of_all_users(){
		json=response.jsonPath();
		int page_Number=   Integer.parseInt(json.getString("total_pages"));
		if(page_Number>1) {
			for(int i=1; i<=page_Number; i++) {
				response= reqhandler.getReqestWithURI("/api/users?page="+i);
				UserId.addAll(json.get("data.id"));
				response.prettyPrint();
			}
		}
	}


	@Then("^I should see total users count equals to number of user ids$")
	public void i_should_see_total_users_count_equals_to_number_of_user_ids(){

		Assert.assertEquals("Users count not equal to userid", Integer.parseInt(json.getString("total")), UserId.size());
	}



	@Given("^I make a search for user (\\d+)$")
	public void i_make_a_search_for_user(int user){

		response= reqhandler.getReqestWithURI("/api/users/"+user);

		response.prettyPrint();
	}

	@Then("^I should see following user data$")
	public void i_should_see_following_user_data(DataTable table){


		String[] responsekey= {"data.first_name","data.email"};

		List<String> responseValue=	reqhandler.getJsonResponseAsList(Arrays.asList(responsekey));
		List<String> tableData=DataTableReader.getDataFromDataTableAsList(table,1);

		Assert.assertEquals("UserData not matching", tableData, responseValue);
	}

	@Then("^I receive error code (\\d+) in response$")
	public void i_receive_error_code_in_response(int expectedStatusCode){

		int actualstatuscod=reqhandler.getActualStatusCode();
		Assert.assertEquals("Error code mismatch", expectedStatusCode, actualstatuscod);


	}


	@Given("^I create user with following \"([^\"]*)\"    &  \"([^\"]*)\"$")
	public void i_create_user_with_following(String Name, String Job) throws Throwable {

		JSONObject json=new JSONObject();
		json.put("name", Name);
		json.put("job", Job);

		response=reqhandler.postReqestWithExample("/api/users",json);

		response.prettyPrint();

		Assert.assertEquals(201, response.getStatusCode());


	}


	@Then("^response should contain folowing data$")
	public void response_should_contain_folowing_data(DataTable datatable){




		List<String> tableData=DataTableReader.getDataFromDataTableAsList(datatable,0);

		Map<String,String> responseValue=reqhandler.getJsonResponseAsMap(tableData);
		System.out.println(responseValue);
		Assert.assertEquals("UserData not matching", new HashSet<String>(tableData), responseValue.keySet());

	}


	@Given("^I login succesfully with following data$")
	public void i_login_succesfully_with_following_data(DataTable datatable){

		response=reqhandler.postReqestWithDataTable(datatable);
		response.prettyPrint();
		json=response.jsonPath();
		json.getString("token");
		if(json.getString("token")!=null) {
			System.out.println("Login Successful");

		}
		else {
			System.out.println("Login unsuccesful");
		}

	}

	@Given("^I login unsuccesfully with following data$")
	public void i_login_unsuccesfully_with_following_data(DataTable datatable){


		response=reqhandler.postReqestWithDataTable(datatable);
		response.prettyPrint();

	    json=response.jsonPath();

		json.getString("error");

		Assert.assertEquals("Login unsuccesful","Missing email or username", json.getString("error"));

	}

	@Given("^I wait for user list to load$")
	public void i_wait_for_user_list_to_load() {


		response= reqhandler.getReqestWithURI("/api/users");
		Awaitility.await().atMost(30, TimeUnit.SECONDS).until(() -> response.getStatusCode()==200);
		response.prettyPrint();


	}

	@Then("^I should see that every user has a unique id$")
	public void i_should_see_that_every_user_has_a_unique_id() {

	    json=response.jsonPath();
		List<String>list=json.get("data.id");
		HashSet<String> set=new HashSet<String>();
		set.addAll(list);
		int listsize=list.size();
		int setsize=set.size();
		Assert.assertEquals("Users does not have unique id", setsize,listsize);

	}



}
