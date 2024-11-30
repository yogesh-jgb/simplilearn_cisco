package cisco.java.program;

public class Variables {
    
    int length, breadth;  // class variables
    
    public Variables(int length, int breadth){  // this consutrctor will called always in the creation of the obejct
        this.length = length;
        this.breadth = breadth;
    }
    
    public void area(){
        int result = length * breadth;
        System.out.println("The area is :" + result);
    }
    public static void main(String[] args) {
        
        Variables v1 = new Variables(4,5);  // objects should be created inside the main method/ launcher method
        
        Variables v2 = new Variables(10,20);
        
        Variables v3 = new Variables(40,20);
        
        v1.area();
        v2.area();
        v3.area();
    
    }
}

