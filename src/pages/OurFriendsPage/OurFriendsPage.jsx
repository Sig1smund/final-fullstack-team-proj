import { useEffect } from "react";
import { getServices } from "redux/services/operations";
import Spinner from "utils/Spinner"
import OurFriendsList from "components/OurFriendsList";
import useServices from 'hooks/useServices';
import { useDispatch } from "react-redux";
import s from './OurFriendsPage.module.css'

export default function OurFriendsPage() {
    const dispatch = useDispatch();
    const {services, isLoading} = useServices();

    useEffect(() => {
        dispatch(getServices())
    }, [dispatch]);
    
    return (
        <>
            <h1 className={s.title}>Our friends</h1>
            {isLoading && <Spinner />}
            {services && <OurFriendsList />}
        </>
    );
}