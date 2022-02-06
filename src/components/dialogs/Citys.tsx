import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, Icon, List, ListItem } from "@material-ui/core";
import { Province, provinces, provincesList } from "../../data";

interface CityDialogProps {
    setFieldValue(field: string, value: any): void;
    openProvinceDialog: boolean;
    setOpenProvinceDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CityDialog: React.FC<CityDialogProps> = ({ setFieldValue, openProvinceDialog, setOpenProvinceDialog }) => {

    const [cityDialogOptions, setCityDialogOptions] = useState<string[]>([]);
    const [openCityDialog, setOpenCityDialog] = useState(false);
    const [province, setProvince] = useState("");

    const goBack = () => {
        setOpenProvinceDialog(true);
        setOpenCityDialog(false);
    };

    const goNext = (name: Province) => {
        setProvince(name);
        setCityDialogOptions(provinces[name]);
        setOpenCityDialog(true);
        setOpenProvinceDialog(false);
    };

    return (
        <>
            {/* Province Dialog */}
            <Dialog
                className="samim-bold"
                PaperProps={{ className: "w-full h-3/4 base-text-900 base-bg-800" }}
                maxWidth="xs"
                open={openProvinceDialog}
                onClose={() => setOpenProvinceDialog(false)}
            >
                <DialogTitle className="px-4">
                    <div className="flex justify-between items-center px-0">
                        <Icon onClick={() => setOpenProvinceDialog(false)}>clear</Icon>
                        <h2 className="text-xl samim-bold rtl">شهر خود را انتخاب کنید</h2>
                    </div>
                </DialogTitle>
                <DialogContent dividers className="p-0 rtl">
                    <List>
                        {(provincesList).map((name) => (
                            <ListItem
                                className="py-3 flex items-center justify-between"
                                button
                                key={name}
                                onClick={() => goNext((name as Province))}
                            >
                                <div className="flex items-center">
                                    <span className="text-sm">{name}</span>
                                </div>
                                <Icon className="ml-0 base-text-600">chevron_left</Icon>
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
            </Dialog>

            {/* City Dialog */}
            <Dialog
                className="samim-bold"
                PaperProps={{ className: "w-full h-3/4 base-text-900 base-bg-800" }}
                maxWidth="xs"
                open={openCityDialog}
                onClose={() => setOpenCityDialog(false)}
            >
                <DialogTitle className="px-4">
                    <div className="flex justify-between items-center px-0">
                        <Icon onClick={goBack}>arrow_back</Icon>
                        <h2 className="text-xl samim-bold rtl">{province}</h2>
                    </div>
                </DialogTitle>

                <DialogContent dividers className="p-0 rtl">
                    <List>
                        {cityDialogOptions.map((city: string) => (
                            <ListItem
                                button
                                className="py-3 flex items-center justify-between"
                                key={city}
                                onClick={() => {
                                    setFieldValue("province", province);
                                    setFieldValue("city", city);
                                    setOpenCityDialog(false);
                                }}
                            >
                                <div className="flex items-center">
                                    <span className="text-sm xl:text-base">{city}</span>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
            </Dialog>
        </>
    );
};
