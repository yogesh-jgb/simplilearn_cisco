package cisco.java.program;

interface Login{
	public void register();
	public void login();
	
}
interface Cart{
	public void payment();
	public void wallet();
	
}
interface Logout{
	public void login();
	public void out();
	
}
interface Dashboared{
	public void register();
	public void profile();
	
}

interface Website extends Login,Cart,Logout,Dashboared{
	
}


public class Interfaceassignment implements Website {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Website a=new Interfaceassignment();
		a.register();
		a.login();
		a.register();
		a.out();
		a.profile();
		a.wallet();
		a.payment();
		
		

	}

	@Override
	public void register() {
		// TODO Auto-generated method stub
		System.out.println("This is register method");
		
	}

	@Override
	public void login() {
		System.out.println("This is Login method");
		
	}

	@Override
	public void payment() {
		System.out.println("This is payment method");
		
	}

	@Override
	public void wallet() {
		// TODO Auto-generated method stub
		System.out.println("This is wallet method");
		
	}

	@Override
	public void out() {
		// TODO Auto-generated method stub
		System.out.println("This is out method");
		
	}

	@Override
	public void profile() {
		// TODO Auto-generated method stub
		System.out.println("This is prfile method");
		
	}

}
