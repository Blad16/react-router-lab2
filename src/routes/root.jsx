import { Outlet } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { getContacts } from "../contacts";
import {
    Outlet,
    NavLink,
    Link,
    useLoaderData,
    Form,
    useNavigation,
    } from "react-router-dom";


  import { getContacts } from "../contacts";
  import { getContacts, createContact } from "../contacts";
  export async function action() {
    const contact = await createContact();
    return { contact };
  }
  export async function loader({ request }) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const contacts = await getContacts(q);
    return { contacts };
  }
  


export async function loader() {
    const { contacts } = useLoaderData();
    return { contacts };
  }

export default function Root() {
  const { contacts } = useLoaderData();
  const navigation = useNavigation();

    return (
    
      <>
      
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
                
              />
              
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div><Form method="post">
            <button type="submit">New</button>
          </Form></div>
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    {/* other code */}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
          </nav>
        </div>
        <div id="detail"></div>
        className={
          navigation.state === "loading" ? "loading" : ""
        }
        
        <Outlet />
      </>
    );
    
  }
 