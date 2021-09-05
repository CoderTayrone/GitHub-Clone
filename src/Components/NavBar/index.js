import { ContainerNavBar, ContainerNav } from "./styles";
import React from 'react'
import { useFormik } from 'formik';
import { useGetSearch } from "../../Contexts/SearchContext";
import socialMediaAuth from "../../services/auth";
import { githubProvider } from "../../config/authMethods";


const NavBar = () => {  
    const { setSearch} = useGetSearch()
    // Pass the useFormik() hook initial form values and a submit function that will
 
    // be called when the form is submitted
 
    const formik = useFormik({
 
      initialValues: {
 
        name: '',
 
      },
 
      onSubmit: values => {
 
        setSearch(values)

      },
 
    });

    const handleOnClick = async(provider) => {
      const res = await socialMediaAuth(provider)
      console.log(res)
    }

   
  return (
  <>
    <ContainerNavBar>
      <ContainerNav>
          <nav>
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzIiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tbWFyay1naXRodWIgY29sb3ItdGV4dC13aGl0ZSIgdmlld0JveD0iMCAwIDE2IDE2IiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIzMiIgYXJpYS1oaWRkZW49InRydWUiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMEMzLjU4IDAgMCAzLjU4IDAgOGMwIDMuNTQgMi4yOSA2LjUzIDUuNDcgNy41OS40LjA3LjU1LS4xNy41NS0uMzggMC0uMTktLjAxLS44Mi0uMDEtMS40OS0yLjAxLjM3LTIuNTMtLjQ5LTIuNjktLjk0LS4wOS0uMjMtLjQ4LS45NC0uODItMS4xMy0uMjgtLjE1LS42OC0uNTItLjAxLS41My42My0uMDEgMS4wOC41OCAxLjIzLjgyLjcyIDEuMjEgMS44Ny44NyAyLjMzLjY2LjA3LS41Mi4yOC0uODcuNTEtMS4wNy0xLjc4LS4yLTMuNjQtLjg5LTMuNjQtMy45NSAwLS44Ny4zMS0xLjU5LjgyLTIuMTUtLjA4LS4yLS4zNi0xLjAyLjA4LTIuMTIgMCAwIC42Ny0uMjEgMi4yLjgyLjY0LS4xOCAxLjMyLS4yNyAyLS4yNy42OCAwIDEuMzYuMDkgMiAuMjcgMS41My0xLjA0IDIuMi0uODIgMi4yLS44Mi40NCAxLjEuMTYgMS45Mi4wOCAyLjEyLjUxLjU2LjgyIDEuMjcuODIgMi4xNSAwIDMuMDctMS44NyAzLjc1LTMuNjUgMy45NS4yOS4yNS41NC43My41NCAxLjQ4IDAgMS4wNy0uMDEgMS45My0uMDEgMi4yIDAgLjIxLjE1LjQ2LjU1LjM4QTguMDEzIDguMDEzIDAgMDAxNiA4YzAtNC40Mi0zLjU4LTgtOC04eiIvPjwvc3ZnPg==" ></img>
            <ul>
              <li>Why github?</li>
              <li>Team</li>
              <li>Enterprise</li>
              <li>Explore</li>
              <li>Marketplace</li>
              <li>Pricing</li>
            </ul>


          </nav>
  
          <form onSubmit={formik.handleSubmit}>

            <input

              id="name"

              name="name"

              type="text"

              onChange={formik.handleChange}

              value={formik.values.name}

            />

            <button type="submit">Submit</button>
            <button type="button" onClick={()=> handleOnClick(githubProvider)}>Sign in</button>

          </form>

          {/* <form action="/login">
          <input type="text" onChange={handleChange} placeholder="Search" />
            <button type="submit">Sign In</button>
            <button>Sign Up</button>

          </form> */}
      </ContainerNav>
    </ContainerNavBar>
  </>
  )
}

export default NavBar