package cisco.java.program;


class Shape1{
	int l=10,b=20,bs=30,he=30,s=40,d1=40,d2=30;
	
	void display(){
		System.out.println("The parent class");
	}
}

class Rect extends Shape1{
	void display(){
		System.out.println(l*b);
	}
}
class Triangle extends Shape1{
	void display(){
		System.out.println(he*bs/2);
	}
}

class Square extends Shape1{
	void display(){
		System.out.println(s*s);
	}
}

class Rhom extends Shape1{
	void display(){
		System.out.println(d1*d2/2);
	}
}



public class polymorphism {

	public static void main(String[] args) {
		Shape1 a;
		a=new Rect();
		a.display();
		a=new Triangle();
		a.display();
		a=new Square();
		a.display();
		a=new Rhom();
		a.display();

	}

}
