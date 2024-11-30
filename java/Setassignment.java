package cisco.java.program;

import java.util.HashSet;

import java.util.LinkedHashSet;

public class Setassignment {
	
	
	public static void main(String[] args) {
LinkedHashSet L1 = new LinkedHashSet();
        L1.add(10);
        L1.add(20);
        L1.add(10.5f);
        L1.add(20.5f);
        L1.add('A');
        L1.add('B');
        L1.add(true);
        
        System.out.println("LinkedHashSet L1: " + L1);
        
        LinkedHashSet L2 = new LinkedHashSet();
        
        // Adding elements to L2
        L2.add("hyderabad");
        L2.add("vizag");
        L2.add("goa");
        L2.add("vizianagaram");
        L2.add("jammu");
        L2.add("bihar");
        System.out.println("LinkedHashSet L2: " + L2);
        System.out.println(L2.size());
        System.out.println(L2.isEmpty());
        System.out.println(L2.contains("Delhi"));

	}

}
