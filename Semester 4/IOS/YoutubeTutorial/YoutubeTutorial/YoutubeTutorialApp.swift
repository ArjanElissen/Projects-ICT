//
//  YoutubeTutorialApp.swift
//  YoutubeTutorial
//
//  Created by A.J.A.F. Elissen on 12/10/2022.
//

import SwiftUI
import Firebase

@main
struct YoutubeTutorialApp: App {
    @StateObject var dataManager = DataManager()
    
    init(){
        FirebaseApp.configure()
    }
    
    var body: some Scene {
        WindowGroup {
            ListView()
                .environmentObject(dataManager)
        }
    }
}
