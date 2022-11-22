import TestButton from '../../components/addons/TestButton.component'

function LandingPage() {
  return (
    <div className="LandingPage">
        <h1>LandingPage here!</h1>
		<TestButton slug='/login-register' buttonName='Login/Register' />
    </div>
  );
}

export default LandingPage;
