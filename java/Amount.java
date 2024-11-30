package cisco.java.program;

public class Amount {
	
public int totalamount(int rate, int time){
        int priciple=10;
        int SI = priciple*rate*time;
        int amount=SI + priciple;
        return amount;
    }

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 Amount a = new Amount();
		 // objects should be created inside the main method/ launcher method
	        
	        int res=a.totalamount(20,30);
	        System.out.println("The amount is"+res);
	}

}
