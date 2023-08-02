import React from "react";
import trash from "../../img/trash.svg"
import archive from "../../img/archive.svg"
import pen from "../../img/pen.svg"
import TableCell from "../table/TableCell";

export default function ActionGroup() {
    return (
        <>
            <TableCell content={<img src={archive} alt="archive note icon"/>}/>
            <TableCell content={<img src={pen} alt="pen note icon"/>}/>
            <TableCell content={<img src={trash} alt="trash note icon"/>}/>
        </>
    )
}