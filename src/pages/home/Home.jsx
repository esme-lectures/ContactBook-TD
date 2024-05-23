import { useEffect, useState } from "react";
import { ContactInfo } from "../../components/ContactInfo";

export function Home() {

    // List[Obj]
    const [people, setPeople] = useState([]);

    async function getData() {
        console.log("Fetch data from API");
        var people = []
        for (let index = 0; index < 20; index++) {
            const p = await fetch("https://randomuser.me/api/")
            const data = await p.json()
            people.push({
                name: data.results[0].name.first,
                img: data.results[0].picture.medium,
                country: data.results[0].location.country
            })
        }
        return people;
    }

    // Hook
    useEffect(() => {
        getData().then(data => {
            setPeople(data);
        });
    }, [])

    // List[obj] --> List[<li>]
    const makeList = people
    .map(p => <li>
        <ContactInfo
            imgUrl={p.img}
            name={p.name}
            country={p.country} />
    </li>)

    return (
        <div>
            <h1>Home</h1>
            <ul>
                {makeList}

                <li> <ContactInfo
                    imgUrl={p.img}
                    name={p.name}
                    country={p.country} />
                </li>

                <li> <ContactInfo
                    imgUrl={p.img}
                    name={p.name}
                    country={p.country} />
                </li>
                <li> <ContactInfo
                    imgUrl={p.img}
                    name={p.name}
                    country={p.country} />
                </li>
                <li> <ContactInfo
                    imgUrl={p.img}
                    name={p.name}
                    country={p.country} />
                </li>
            </ul>

        </div>

    )

}