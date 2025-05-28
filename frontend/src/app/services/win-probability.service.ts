import { Injectable } from "@angular/core";
import { WinProbability } from "../models/win-probability.model";

@Injectable({ providedIn: "root" })
export class WinProbabilityService {
    getWinProbabilitiesBeforeLeagueMatches(): WinProbability[] {
        return [
            { year: "2008", percentage: 20, description: "Inexperienced squad; over-reliance on Rahul Dravid and Jacques Kallis; lacked T20 specialists." },
            { year: "2009", percentage: 35, description: "Improved balance with Kevin Pietersen and Ross Taylor; better bowling options." },
            { year: "2010", percentage: 40, description: "Strong batting lineup with Pietersen, Kohli, and Kallis; bowling still a concern." },
            { year: "2011", percentage: 60, description: "Addition of Chris Gayle and AB de Villiers bolstered batting; reached finals." },
            { year: "2012", percentage: 50, description: "Gayle in prime form; inconsistent bowling attack." },
            { year: "2013", percentage: 45, description: "Strong top-order but middle-order and bowling inconsistencies." },
            { year: "2014", percentage: 40, description: "Over-reliance on top-order; bowling lacked depth." },
            { year: "2015", percentage: 55, description: "Balanced squad with Kohli, de Villiers, and Mitchell Starc; improved bowling." },
            { year: "2016", percentage: 65, description: "Kohli's exceptional form; strong batting lineup; reached finals." },
            { year: "2017", percentage: 35, description: "Injuries to key players; over-reliance on top-order." },
            { year: "2018", percentage: 45, description: "Kohli and de Villiers in form; bowling inconsistencies." },
            { year: "2019", percentage: 40, description: "Strong batting but weak death bowling; team balance issues." },
            { year: "2020", percentage: 50, description: "Improved bowling with Morris and Chahal; batting depth concerns." },
            { year: "2021", percentage: 55, description: "Addition of Maxwell; balanced squad; consistent performances." },
            { year: "2022", percentage: 60, description: "Strong leadership with Faf du Plessis; balanced team; good bowling attack." },
            { year: "2023", percentage: 50, description: "Consistent performances; need for better finishing in matches." },
            { year: "2024", percentage: 45, description: "Lack of quality spinners; over-reliance on top-order." },
            { year: "2025", percentage: 55, description: "Balanced squad with strong batting and bowling; spin department concerns." }
        ]
    }

    getWinProbabilitiesAfterTournamentConclusion(): WinProbability[] {
        return [
            { year: "2008", percentage: 0.0 },
            { year: "2009", percentage: 0.0 },
            { year: "2010", percentage: 0.0 },
            { year: "2011", percentage: 0.0 },
            { year: "2012", percentage: 0.0 },
            { year: "2013", percentage: 0.0 },
            { year: "2014", percentage: 0.0 },
            { year: "2015", percentage: 0.0 },
            { year: "2016", percentage: 0.0 },
            { year: "2017", percentage: 0.0 },
            { year: "2018", percentage: 0.0 },
            { year: "2019", percentage: 0.0 },
            { year: "2020", percentage: 0.0 },
            { year: "2021", percentage: 0.0 },
            { year: "2022", percentage: 0.0 },
            { year: "2023", percentage: 0.0 },
            { year: "2024", percentage: 0.0 },
        ]
    }
}