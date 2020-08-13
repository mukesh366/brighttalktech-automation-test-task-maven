package utility;

import java.util.ArrayList;
import java.util.List;

import cucumber.api.DataTable;

public class DataTableReader {

	public DataTableReader() {}
	
		
	public static List<String> getDataFromDataTableAsList(DataTable table, int index){
		
		List<List<String>> data  = table.raw();
		List<String> datalist=new ArrayList<String>();
		datalist=data.get(index);
	
		return datalist;
		
	}  
	
}
