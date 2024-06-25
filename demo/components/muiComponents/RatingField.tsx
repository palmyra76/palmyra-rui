import { MuiRating } from "../../../lib/main";
import FormX from "../wire/FormX";
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const BasicSetup = ` <MuiRating
    attribute="radio"
    precision={2.5}
    size="large"
    max={10}
/>
`;

const BasicRatingField = () => {
    return (
        <FormX>
            <MuiRating
                attribute="rating"
                precision={2.5}
                max={10}
            />
        </FormX>
    )
}

const CustomIconSetup = ` <MuiRating
    attribute="rating"
    size="small"
    max={5}
    icon={FavoriteIcon}
    emptyIcon={FavoriteBorderIcon}
/>
`;

const CustomIconRatingField = () => {
    return (
        <FormX>
            <MuiRating
                attribute="radio"
                max={5}
                icon={Favorite}
                emptyIcon={FavoriteBorder}
            />
        </FormX>
    )
}


export { BasicSetup, BasicRatingField, CustomIconSetup, CustomIconRatingField }