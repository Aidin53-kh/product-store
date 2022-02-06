import React from "react";
import { 
    Tooltip as MuiTooltip, 
    TooltipProps as  MuiTooltipProps 
} from "@material-ui/core";

export interface TooltipProps extends MuiTooltipProps {
    show: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ children, show, title, ...props }) => {
    return show ? (
        <MuiTooltip title={<span className="block samim-bold text-xs p-1">{title}</span>} {...props}>
            {children}
        </MuiTooltip>
    ) : (
        children
    );
};

export default Tooltip;
