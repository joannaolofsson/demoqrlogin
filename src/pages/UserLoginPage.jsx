import React from "react";
import { Link } from "react-router-dom";
import Olist from "../components/Olist";

function UserLoginPage() {
  let [action, setAction] = React.useState(null);
    return (
      <>
        <div className="flexContainer">
          <div className="flexArea">


            <Form className="formArea"
            onSubmit={e => {
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.currentTarget));
            setAction(`submit ${JSON.stringify(data)}`);
            }}
            onReset={() => setAction('reset')}
            ><div className="gridForm">
            <div className="qrInstructions">
            <Olist />
            </div>
            </div>
            <div className="inputFields">
              <TextField name="username" className="userName" isRequired>
                <Label>
                  Användarnamn
                </Label>
                <Input className="userInput"/>
                <FieldError />
              </TextField>
              <TextField name="password" type="password" className="passWord" isRequired>
                <Label>
                  Lösenord
                </Label>
                <Input className="passWordInput"/>
                <FieldError />
              </TextField>
              <div className="btnArea">
                <Link to="/dashboard" type="submit" className="btnSubmit">Submit</Link>
                <Button type="reset" className="btnReset">Reset</Button>
              </div>
            {action && <div>Action: <code>{action}</code></div>}
            </div>
            <Link to="/dashboard" className="lyckadInloggning">Lyckad inloggning</Link>
            <Link to="/misslyckades" className="misslyckadInloggning">Misslyckad inloggning</Link>
          </Form>
        </div>
        </div>
        </>
  )
}

export default UserLoginPage

