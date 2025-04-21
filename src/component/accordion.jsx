import { useState } from "react";

const data = [
    {
        id: 1,
        title: "HTML",
        content:
            " The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
        isExpanded: false,
    },
    {
        id: 2,
        title: "HTML",

        content:
            " The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
        isExpanded: false,
    },
    {
        id: 3,
        title: "HTML",

        content:
            " The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
        isExpanded: false,
    },
];


export default function Accordion() {

    const [accordions, setAccordions] = useState(data);

    const onClick = (index) => {
        setAccordions((prev) =>
            prev.map((item, i) =>
                i === index ? { ...item, isExpanded: !item.isExpanded } : item
            )
        );
    }

    return (
        <>
            {accordions?.map((accordion, index) => {
                return (
                    <div key={accordion.id} className="wrapper">
                        <button onClick={() => onClick(index)}>
                            {accordion.title} {accordion.isExpanded ? "▼" : "▶"}
                        </button>
                        {accordion.isExpanded && <p>{accordion.content}</p>}
                    </div>
                )
            })}
        </>
    )

}