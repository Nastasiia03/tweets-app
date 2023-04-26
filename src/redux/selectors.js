import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";


export const selectUsers = state => state.users.items;

export const selectIsLoading = state => state.users.isLoading;

export const selectError = state => state.users.error;

export const selectFollowers = state => state.users.items.followers;

export const selectStatusFilter = state => state.filters.status;

export const selectVisibleUsers = createSelector(
  [selectUsers, selectStatusFilter],
  (users, statusFilter) => {
 switch (statusFilter) {
      case statusFilters[1]:
        return users.filter(user => !user.following);
      case statusFilters[2]:
        return users.filter(user => user.following);
      default:
        return users;
    }
  }
);