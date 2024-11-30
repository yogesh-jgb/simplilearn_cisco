package cisco.java.program;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.TreeSet;
public class Arrayasssignment3 {

	public static void main(String[] args) {
ArrayList<String> list = new ArrayList<>();
       
        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");
        list.add("Date");
        list.add("Mumbai");
        list.add("Delhi");
        list.add("Cricket");
        list.add("Singing");
        
     
        System.out.println(list);
        list.remove("Cricket");
        System.out.println(list);
        System.out.println(list.contains("Cricket"));
        list.remove("Mumbai");
        list.remove("Apple");
        System.out.println(list);
        System.out.println("4th element: " + list.get(3));
        System.out.println("6th element: " + list.get(5));
        list.set(list.indexOf("Singing"), "Dancing");
        System.out.println(list);
        list.add(3, "Kerala");
        System.out.println(list);
        list.add(1, "Mango");
        System.out.println(list);

	}

}
