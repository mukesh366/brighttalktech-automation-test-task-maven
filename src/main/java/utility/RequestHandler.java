package utility;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import AutomationTest.BrightTalkTest.LoadProp;
import cucumber.api.DataTable;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import net.minidev.json.JSONObject;


public class RequestHandler {

	private RequestSpecification httpRequest = RestAssured.given();



	private Response response;

	public Response getReqestWithURI(String pathParam) {


		RestAssured.baseURI=LoadProp.getproperty("BaseURI");
		httpRequest=RestAssured.given();
		httpRequest.header("Content-Type","application/json");
		response= httpRequest.get(pathParam);
		return response;
	}


	public Response postReqestWithExample(String pathParam, JSONObject json) {

		RestAssured.baseURI=LoadProp.getproperty("BaseURI");
		httpRequest=RestAssured.given();
		httpRequest.header("Content-Type","application/json");

		String str=json.toJSONString();
		httpRequest.body(str);

		response=httpRequest.post(pathParam);
		return response;
	}


	public Response postReqestWithDataTable(DataTable table) {

		RestAssured.baseURI=LoadProp.getproperty("BaseURI");
		RequestSpecification request=RestAssured.given();
		request.header("Content-Type","application/json");

		JSONObject json=new JSONObject();

		List<List<String>>	data=table.raw();

		json.put(data.get(0).get(0), data.get(1).get(0));
		json.put(data.get(0).get(1), data.get(1).get(1));

		request.body(json.toJSONString());
		response=request.post("/api/login");
		return response;
	}

	public List<String> getJsonResponseAsList(List<String> key) {
		JsonPath json=response.jsonPath();

		List<String> actualJson=new ArrayList<String>();
		for(String str: key) {
			actualJson.add(json.get(str));
		}

		return actualJson;
	}

	public Map<String,String> getJsonResponseAsMap(List<String> key) {
		JsonPath json=response.jsonPath();

		Map<String,String> actualJson=new HashMap<String,String>();
		for(String str: key) {
			actualJson.put(str,json.get(str));
		}

		return actualJson;
	}
	
	
	
	public int getActualStatusCode() {
		return	response.getStatusCode();
	}

	public void postMap(String key, String value) {

		Map<String,String> map=new HashMap<String,String>();

		map.put("name", key);
		map.put("job", value);
		JSONObject json=new JSONObject();

		json.putAll(map);

		httpRequest.body(json.toJSONString());


	}

}
