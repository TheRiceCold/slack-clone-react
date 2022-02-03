import {
    RegisterMain,
    RegisterBoard,
    RegisterTextSubHeading,
    RegisterInputs,
    RegisterButtons,
    TextInstructions,
    Terms
} from './style'

function RegisterBody(){
    return(
            <RegisterMain>
                <RegisterBoard>
                    <RegisterTextSubHeading>We suggest using the <strong>email address you use at work.</strong></RegisterTextSubHeading>
                    <RegisterInputs>
                        <input type="email" placeholder="name@work-email.com"></input>
                        <input type="text" placeholder="Enter your password"></input>
                        <input type="text" placeholder="Confirm password"></input>
                    </RegisterInputs>
                    <RegisterButtons>
                        <button>Continue</button>
                    </RegisterButtons>
                    <TextInstructions>
                        <span> <input type="checkbox" name="emailnotifs" id="emailnotifs"/> <label htmlFor="emailnotifs">Its okay to send me emails about Slack.</label></span>
                        <Terms>By continuing, you’re agreeing to our 
                            <a href="/#"> Customer Terms of Service,</a> 
                            <a href="/#"> Privacy Policy,</a>
                            <a href="/#"> Cookie Policy.</a>
                        </Terms>
                    </TextInstructions>
                </RegisterBoard>
            </RegisterMain>
    )
}

export default RegisterBody