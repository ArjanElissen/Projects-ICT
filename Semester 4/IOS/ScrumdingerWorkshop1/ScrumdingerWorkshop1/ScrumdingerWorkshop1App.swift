//
//  ScrumdingerWorkshop1App.swift
//  ScrumdingerWorkshop1
//
//  Created by A.J.A.F. Elissen on 04/10/2022.
//

import SwiftUI

@main
struct ScrumdingerWorkshop1App: App {
    var body: some Scene {
        WindowGroup {
            ScrumsView(scrums: DailyScrum.sampleData)
            MeetingView()
        }
    }
}
