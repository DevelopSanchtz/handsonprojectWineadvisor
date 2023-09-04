import React, { useEffect, useState, useRef } from 'react';
import apiUsers from '../api/apiUsers';
import { ResponseUser, User } from '../interface/userInterface';

const useUsers = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [userState, setUserState] = useState<User[]>([]);
    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);
    const hasMore = useRef(true); 

    const loadUsers = async () => {
        if (loadingMore || !hasMore.current) return;
        setLoadingMore(true);

        try {
            const response = await apiUsers.get<ResponseUser>('/users', { params: { page } });
            if (userState.length + response.data.data.length >= 12) {
                hasMore.current = false;
            }
            if (response.data.data.length === 0) {
                hasMore.current = false;
                return;
            }
            
            setUserState(prevUsers => [...prevUsers, ...response.data.data]);
            
            if (hasMore.current) {
                setPage(prevPage => prevPage + 1);
            }

        } catch (error) {
            console.error("Error al cargar los usuarios:", error);
        } finally {
            setLoadingMore(false);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadUsers();
    }, []);

    return {
        userState,
        isLoading,
        loadMore: loadUsers,
        hasMore: hasMore.current
    };
}

export default useUsers;