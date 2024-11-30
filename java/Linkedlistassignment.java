package cisco.java.program;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.ListIterator;

public class Linkedlistassignment {

	public static void main(String[] args) {
		// Create a LinkedList
        LinkedList<String> months = new LinkedList<>();

        // Add 6 months
        months.add("May");
        months.add("June");
        months.add("July");
        months.add("August");
        months.add("April");
        months.add("November");

        // Add 'December' month as last
        months.addLast("December");

        // Add 'January' month as first
        months.addFirst("January");

        // Add 'March' and then add 'February' using index-based
        months.add(2, "March");
        months.add(2, "February");

        // Add 'September' and then add 'October' using index-based
        months.add(8, "September");
        months.add(9, "October");

        // Print the LinkedList
        System.out.println("Months: " + months);

        // Get all the even months and print them
        System.out.println("Even months: ");
        for (int i = 0; i < months.size(); i += 2) {
            System.out.println(months.get(i));
        }

        // Get all the odd months and print them
        System.out.println("Odd months: ");
        for (int i = 1; i < months.size(); i += 2) {
            System.out.println(months.get(i));
        }

        // Use iterator to fetch and print all months
        System.out.println("Months using iterator: ");
        ListIterator<String> iterator = months.listIterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        // Print the first and last month of the year together
        System.out.println("First and last month: " + months.getFirst() + ", " + months.getLast());

        // Remove your birthday month from the LinkedList and print it
        // Replace "June" with your birthday month
        months.remove("June");
        System.out.println("Months after removing birthday month: " + months);

        // Check whether this LinkedList contains any winter month inside it or not?
        String[] winterMonths = {"December", "January", "February"};
        boolean containsWinterMonth = false;
        for (String month : winterMonths) {
            if (months.contains(month)) {
                containsWinterMonth = true;
                break;
            }
        }
        System.out.println("Contains winter month: " + containsWinterMonth);

        // Fetch the first and last months using peek()
        System.out.println("First month using peek(): " + months.peekFirst());
        System.out.println("Last month using peek(): " + months.peekLast());

        // Remove the first and last months using poll()
        System.out.println("Removed first month: " + months.pollFirst());
        System.out.println("Removed last month: " + months.pollLast());
        System.out.println("Months after removing first and last: " + months);

	}

}
