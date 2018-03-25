import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { AuthedApi } from "../authed-api";
import { FE_IntegrationsResponse } from "../../models/dimension-responses";

@Injectable()
export class AdminIntegrationsApiService extends AuthedApi {
    constructor(http: Http) {
        super(http);
    }

    public getAllWidgets(): Promise<FE_IntegrationsResponse> {
        return this.authedGet("/api/v1/dimension/admin/integrations/widget/all").map(r => r.json()).toPromise();
    }

    public toggleIntegration(category: string, type: string, enabled: boolean): Promise<any> {
        return this.authedPost("/api/v1/dimension/admin/integrations/" + category + "/" + type + "/enabled", {enabled: enabled}).map(r => r.json()).toPromise();
    }

    public setIntegrationOptions(category: string, type: string, options: any): Promise<any> {
        return this.authedPost("/api/v1/dimension/admin/integrations/" + category + "/" + type + "/options", {options: options}).map(r => r.json()).toPromise();
    }
}
