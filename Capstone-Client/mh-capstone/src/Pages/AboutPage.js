import { Link } from "react-router-dom"

export default function AboutPage() {
    return(
        <p>In today’s digital world, understanding cybersecurity matters more now than ever before. The DMZ at Ryerson University, in partnership with the Royal Bank of Canada, have come together to launch CanHack - a cybersecurity student competition. Participants will learn critical computer security skills, work with experts in the field and have an opportunity to win up to $16,250 in cash prizes for both themselves and the school they attend!

        Participants must reverse engineer, break, hack, decrypt, or do whatever it takes to solve the problem statement. At the end of the challenge, students will walk away with a basic understanding of cybersecurity systems.
        
        <br />

        Find more information here: <Link to='https://dmz.ryerson.ca/canhack/'>https://dmz.ryerson.ca/canhack/</Link>
        </p>
    )
}