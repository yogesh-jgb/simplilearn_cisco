package cisco.java.program;

import java.util.HashMap;
import java.util.Map;

public class hashmapassignment {

	public static void main(String[] args) {
        Map<Integer, String> countryMap = new HashMap<>();
        countryMap.put(1, "USA");
        countryMap.put(2, "Canada");
        countryMap.put(3, "India");
        countryMap.put(4, "China");
        countryMap.put(5, "Japan");
        countryMap.put(6, "Korea");
        countryMap.put(7, "Germany");
        countryMap.put(8, "France");
        countryMap.put(9, "Italy");
        System.out.println("Country codes: " + countryMap.keySet());
        System.out.println("Country names: " + countryMap.values());
        System.out.println("Is India present? " + countryMap.containsValue("India"));
        System.out.println("Is key 45 present? " + countryMap.containsKey(45));
        countryMap.remove(5);
        System.out.println("Country map after removing Japan: " + countryMap);
        Map<Integer, String> stateMap = new HashMap<>();
        stateMap.put(10, "New York");
        stateMap.put(11, "California");
        stateMap.put(12, "Florida");

        // Merge the state map with the country map
        countryMap.putAll(stateMap);
        System.out.println("Merged map: " + countryMap);

        // Delete the key (5)
        countryMap.remove(5);
        System.out.println("Map after deleting key 5: " + countryMap);

        // Check if the map is empty or not
        System.out.println("Is map empty? " + countryMap.isEmpty());

        // Clear the map
        countryMap.clear();
        System.out.println("Map after clearing");

	}

}
