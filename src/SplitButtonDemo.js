import React, { useRef } from 'react';
import { SplitButton } from 'primereact/splitbutton';

const SplitButtonDemo = () => {
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({severity:'success', summary:'Updated', detail:'Data Updated'});
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        },
        {   label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                window.location.hash = "/fileupload"
            }
        }
    ];


    return (
        <div>

            <div className="card">


                <SplitButton label="" icon="pi-chevron-up" model={items}   ></SplitButton>

            </div>
        </div>
    )
}

export default SplitButtonDemo;
