import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import { CellGetter, ColumnDefinition, FlexiLayoutDefinition, FlexiLayoutRenderer, GridCustomizer, IPalmyraGrid, Pagination, PalmyraGrid, ServerCardLayout, StoreFactory, StringFormat, gridColumnCustomizer, topic } from '../../../lib/main';
import { PalmyraStoreFactory } from '../../../lib/palmyra/store/palmyra/PalmyraStoreFactory';
import './BackEndGridPage.css';
import { UserCard } from '../../components/usermgmt/UserCard';
import { NoopEmptyChildCard } from '../../../lib/palmyra/layout/card/EmptyChildCard';

const BackEndGridPage = () => {
    const gridRef = useRef<IPalmyraGrid>(null);
    const storeFactory = new PalmyraStoreFactory({ baseUrl: "/api/palmyra" });
    const fields: ColumnDefinition[] = [
        {
            attribute: "s.no",
            name: "S.No",
            title: "S.No",
            type: "string"
        },
        // {
        //     attribute: "name",
        //     name: "name",
        //     title: "Material Name",
        //     searchable: true,
        //     quickSearch: true,
        //     type: "string"
        // },
        {
            attribute: "name",
            name: "name",
            title: "Project Name",
            searchable: true,
            quickSearch: true,
            type: "string"
        },
        {
            attribute: "description",
            name: "Description",
            title: "Description",
            searchable: true,
            quickSearch: true,
            type: "string"
        },
        {
            attribute: "projectValue",
            name: "projectValue",
            title: "Project Value",
            searchable: true,
            quickSearch: true,
            type: "number"
        }
    ]

    const endPoint = "/masterdata/project";

    const customConfig: Record<string, ((d: CellGetter) => CellGetter)> = {
        's.no': enhance,
    }

    function enhance(): CellGetter {
        let count = 1;
        if (gridRef && gridRef.current) {
            const queryList: Pagination = gridRef.current.getQueryLimit();
            count += queryList.offset;
        }
        return () => {
            return (
                <div >
                    {count++}
                </div>
            )
        };
    }
    const gridCustomizer: GridCustomizer = gridColumnCustomizer(customConfig);

    return <>
        <div className='grid-renderer-container'> 
            <PalmyraGrid columns={fields} endPoint={endPoint} 
                ref={gridRef} customizer={gridCustomizer} gridTitle='GRID'
                layoutParams={{}} storeFactory={storeFactory} />
        </div>
    </>
}

export default BackEndGridPage;
