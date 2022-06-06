import { STORAGE_KEYS } from './../models/dto/authetication/storage_keys';
import { Injectable } from "@angular/core";
import { StorageModel } from '../models/dto/authetication/storage';

@Injectable({providedIn: 'root',})
export class StorageService {
    getStorageModel(): StorageModel {
        let usr = localStorage.getItem(STORAGE_KEYS.storageModel);
        if (usr == null) {
            return null;
        } else {
            return JSON.parse(usr);
        }
    }

    setStorageModel(obj: StorageModel) {
        if (obj == null) {
            localStorage.removeItem(STORAGE_KEYS.storageModel);
        } else {
            localStorage.setItem(
                STORAGE_KEYS.storageModel,
                JSON.stringify(obj)
            );
        }
    }
}