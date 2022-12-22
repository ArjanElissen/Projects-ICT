//
//  Location.swift
//  POCPickLocationMap
//
//  Created by A.J.A.F. Elissen on 20/10/2022.
//

import SwiftUI
import Foundation

struct Location: Identifiable, Codable, Equatable {
    let id: UUID
    var name: String
    var description: String
    let latitude: Double
    let longitude: Double
}
