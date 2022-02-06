import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, Icon, List, ListItem } from "@material-ui/core";
import { Categorie, categories, categoriesList } from "../../data";

interface GroupDialogProps {
    setFieldValue(field: string, value: any): void;
    openCategorieDialog: boolean;
    setOpenCategorieDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GroupDialog: React.FC<GroupDialogProps> = ({ setFieldValue, openCategorieDialog, setOpenCategorieDialog }) => {

    const [icons] = useState(["devices", "time_to_leave", "business"]);
    const [groupDialogOptions, setGroupDialogOptions] = useState<string[]>([]);
    const [openGroupDialog, setOpenGroupDialog] = useState(false);
    const [categorie, setCategore] = useState("");

    const goBack = () => {
        setOpenCategorieDialog(true);
        setOpenGroupDialog(false);
    }

    const goNext = (categorie: Categorie) => {
        setCategore(categorie);
        setGroupDialogOptions(categories[categorie]);
        setOpenGroupDialog(true);
        setOpenCategorieDialog(false);
    };

    return (
        <>
            <Dialog
                PaperProps={{
                    className: "samim-bold w-full h-full lg:h-3/4 base-text-900 base-bg-800 mx-3 my-0",
                }}
                maxWidth="xs"
                open={openCategorieDialog}
                onClose={() => setOpenCategorieDialog(false)}
            >
                <DialogTitle className="px-4">
                    <div className="flex justify-between items-center px-0">
                        <Icon className="base-text-600" onClick={() => setOpenCategorieDialog(false)}>
                            clear
                        </Icon>
                        <h2 className="text-xl samim-bold rtl">گروه بندی</h2>
                    </div>
                </DialogTitle>
                <DialogContent dividers className="p-0 rtl">
                    <List>
                        {categoriesList.map((name, i) => (
                            <ListItem
                                className="py-3 flex items-center justify-between"
                                button
                                key={name}
                                onClick={() => goNext((name as Categorie))}
                            >
                                <div className="flex items-center">
                                    <Icon className="ml-5 base-text-600">{icons[i]}</Icon>
                                    <span className="text-sm">{name}</span>
                                </div>
                                <Icon fontSize="small" className="ml-0 base-text-600">
                                    chevron_left
                                </Icon>
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
            </Dialog>
            <Dialog
                className="samim-bold"
                PaperProps={{ className: "w-full h-3/4 base-text-900 base-bg-800" }}
                maxWidth="xs"
                open={openGroupDialog}
                onClose={() => setOpenGroupDialog(false)}
            >
                <DialogTitle className="px-4">
                    <div className="flex justify-between items-center px-0">
                        <Icon onClick={goBack}>arrow_back</Icon>
                        <h2 className="text-xl samim-bold rtl">{categorie}</h2>
                    </div>
                </DialogTitle>

                <DialogContent dividers className="p-0 rtl">
                    <List>
                        {groupDialogOptions.map((group: string) => (
                            <ListItem
                                className="py-3 flex items-center justify-between"
                                button
                                key={group}
                                onClick={() => {
                                    setFieldValue("categorie", categorie);
                                    setFieldValue("group", group);
                                    setOpenGroupDialog(false);
                                }}
                            >
                                <div className="flex items-center">
                                    <span className="text-sm 2xl:text-md">{group}</span>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
            </Dialog>
        </>
    );
};
