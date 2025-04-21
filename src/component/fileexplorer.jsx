import { useState } from "react";

const FileExplorer = () => {

    const data = [
        {
            id: 1,
            name: 'README.md',
        },
        {
            id: 2,
            name: 'Documents',
            children: [
                {
                    id: 3,
                    name: 'Word.doc',
                },
                {
                    id: 4,
                    name: 'Powerpoint.ppt',
                },
            ],
        },
        {
            id: 5,
            name: 'Downloads',
            children: [
                {
                    id: 6,
                    name: 'unnamed.txt',
                },
                {
                    id: 7,
                    name: 'Misc',
                    children: [
                        {
                            id: 8,
                            name: 'foo.txt',
                        },
                        {
                            id: 9,
                            name: 'bar.txt',
                        },
                    ],
                },
            ],
        },
    ];

    const addFile = (node) => {
        const recursion = (data) => {
            return data.map((el) => {
                if (el.id === node.id) {
                    return {
                        ...el,
                        children: [...(el.children || []), {
                            name: 'newNode',
                            id: Math.floor(Math.random() * 100),
                        }],
                    };
                } else {
                    return { ...el, children: el.children ? recursion(el.children) : undefined };
                }
            });
        }
        setFile((prev) => recursion(prev));
    }

    const [file, setFile] = useState(data);

    return (
        <Filefolder data={file} addFile={addFile} />
    )
}

export default FileExplorer


// eslint-disable-next-line react/prop-types
function Filefolder({ data, addFile }) {

    const [isOpen, setOpen] = useState({});

    const onIconClick = (el) => {
        setOpen((prev) => ({
            ...prev,
            [el.name]: !prev[el.name]
        }))

        console.log(isOpen);
    }

    const add = (el) => {
        addFile(el);
    }

    return (
        <>
            {
                // eslint-disable-next-line react/prop-types
                data?.map((el) => {
                    return (
                        <div className="folder" key={el.id}>
                            <a className="file">
                                {
                                    el.children ?
                                        <>
                                            <span onClick={() => onIconClick(el)}>
                                                {isOpen[el.name] ? "▼" : "▶"}
                                            </span>
                                        </>
                                        : ''
                                }

                                {el.name}
                                {el?.children ? <span className="add" onClick={() => add(el)}>+</span> : ''}
                            </a>
                            <br />

                            {
                                el?.children && isOpen[el.name] ?
                                    <div className="child">
                                        <Filefolder data={el?.children} addFile={add} />
                                    </div> : ''
                            }
                        </div>
                    )
                })
            }
        </>
    )
};