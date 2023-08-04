import React from "react";

import { ArchiveIcon, PenIcon, TrashIcon } from "../../utils/icons";

export default function ActionGroup() {
    return (
        <>
            <td><ArchiveIcon /></td>
            <td><PenIcon /></td>
            <td><TrashIcon /></td>
        </>
    )
}