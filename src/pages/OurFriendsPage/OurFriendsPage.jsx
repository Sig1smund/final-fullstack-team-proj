import { useEffect } from "react";
import { getServices } from "redux/services/operations";
import Spinner from "utils/Spinner"
import OurFriendsList from "components/OurFriendsList";
import useServices from 'hooks/useServices';
import {useDispatch } from "react-redux";

export default function OurFriendsPage() {
    const dispatch = useDispatch();
    const {services} = useServices();

    useEffect(() => {
        dispatch(getServices())
    }, [dispatch]);
    
    return (
        <>
            {!services
                ? <Spinner />
                : <OurFriendsList />}
        </>
    );
}