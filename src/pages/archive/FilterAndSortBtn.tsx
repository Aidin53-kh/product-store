import { Icon } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { Button } from "../../components/button";
import { FilterQueryStrings } from "./types";

interface SearchSectionProps {
    updateQueryStrings(filters: Partial<FilterQueryStrings>): void;
    filters: FilterQueryStrings;
}

export const FilterAndSortBtn = ({ openFilterDialog, openSortMenu, ...props }) => (
    <div {...props}>
        <Button className="mr-3 text-blue-400" variant="outlined" onClick={() => openFilterDialog((o) => !o)}>
            <Icon fontSize="small" className="mr-3">
                filter
            </Icon>
            فیلتر ها
        </Button>
        <Button onClick={(e) => openSortMenu(e.target)} className="text-green-500 samim-bold" variant="outlined">
            <Icon fontSize="small" className="mr-2">
                sort
            </Icon>
            مرتب سازی
        </Button>
    </div>
);

export const SearchSection: React.FC<SearchSectionProps> = ({ updateQueryStrings, filters }) => {
    const handleSearch = ({ search }) => updateQueryStrings({ search, page: 1 });

    return (
        <Formik initialValues={{ search: filters.search }} onSubmit={handleSearch}>
            {({ handleSubmit }) => (
                <Form className="flex flex-1 2xl:border-l 2xl:border-r border-gray-400 dark:border-gray-700 2xl:px-4">
                    <Field
                        name="search"
                        className="flex-1 rtl outline-none border-none pr-4 base-text-800 bg-transparent"
                        placeholder="جستجو در محصولات ..."
                    />
                    {filters.search}
                    <Icon onClick={() => handleSubmit()} className="text-gray-500 cursor-pointer">
                        search
                    </Icon>
                </Form>
            )}
        </Formik>
    );
};
